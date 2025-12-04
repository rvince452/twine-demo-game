// Enable visited link styling
Config.addVisitedLinkClass = true;

// Apply visited styling to <<link>> macros after passage display
$(document).on(':passagedisplay', function () {
    // Find all <<link>> elements that go to passages
    $('.macro-link').each(function() {
        var $link = $(this);
        var passage = $link.attr('data-passage');
        
        if (passage && State.hasPlayed(passage)) {
            $link.addClass('link-visited');
        } else if (passage) {
            $link.removeClass('link-visited');
        }
    });
});

Macro.add("shout", {
    handler() {
        const msg = this.payload[0].contents.trim();
        new Wikifier(this.output, `<strong>${msg.toUpperCase()}!</strong>`);
    }
});

function makeSpeakerMacro(name, speakername, cssClass) {
    const finalClass = cssClass || name.toLowerCase();

    Macro.add(name.toLowerCase(), {
        tags: null, // container macro
        handler() {
            const text = this.payload[0].contents;

            // Create wrapper element
            const wrapper = document.createElement("div");
            wrapper.classList.add("speaker", finalClass);
            
            // Add box styling similar to qspeak macro
            wrapper.style.border = "1px solid #33C";
            wrapper.style.padding = "8px";
            wrapper.style.margin = "6px 0";
            wrapper.style.borderRadius = "4px";

            // Only show the label if not 'nar'
            if (name.toLowerCase() !== "nar") {
                const bold = document.createElement("b");
                bold.textContent = speakername + ": ";
                wrapper.appendChild(bold);
            }

            // Wikify the inner text
            new Wikifier(wrapper, text);

            // Append to passage
            this.output.append(wrapper);
        }
    });
}
makeSpeakerMacro("doug", "Doug")
makeSpeakerMacro("katie", "Katie")
makeSpeakerMacro("nar", "Narrator")
makeSpeakerMacro("heather", "Heather")
makeSpeakerMacro("susan", "Susan")
makeSpeakerMacro("al", "Al")
makeSpeakerMacro("you", "You")
makeSpeakerMacro("hal", "Hal")
makeSpeakerMacro("bern", "Bernadette")
makeSpeakerMacro("voice", "Voice")


Macro.add('qspeak', {
    handler: function () {
        var speaker = this.args[0];
        var text = this.args.slice(1).join(' ');
        var html = '<div style="border:1px solid #33C; padding:8px; margin:6px 0; border-radius:4px;">' +
                   '<b>' + speaker + ':</b> ' + text +
                   '</div>';
        this.output.append(Wikifier.wikifyEval(html));
    }
});

// Macro to add locations to the list
Macro.add("addinventory", {
    handler() {
        if (this.args.length < 2) {
            return this.error("addinventory macro requires at least 2 arguments: name and passage");
        }
        
        const name = this.args[0];
        const passage = this.args[1];
        
        // Initialize the locations array if it doesn't exist
        if (!State.variables.inventory) {
            State.variables.inventory = [];
        }
        
        // Check if location already exists (optional - prevents duplicates)
        const exists = State.variables.inventory.some(item => item.name === name || item.passage === passage);
        if (!exists) {
            State.variables.inventory.push({name: name, passage: passage});
        }
    }
});

// Macro to display all locations as links
Macro.add("showinventory", {
    handler() {
        if (!State.variables.inventory || State.variables.inventory.length === 0) {
            this.output.append("No items available.");
            return;
        }
        
        const list = document.createElement("ul");
        State.variables.inventory.forEach(item => {
            const listItem = document.createElement("li");
            const link = `[[${item.name}->${item.passage}]]`;
            new Wikifier(listItem, link);
            list.appendChild(listItem);
        });
        
        this.output.append(list);
    }
});

// Function to check if an item is in inventory (returns boolean for use in expressions)
setup.ininventory = function(itemName) {
    // Initialize the inventory array if it doesn't exist
    if (!State.variables.inventory) {
        State.variables.inventory = [];
    }
    
    // Check if item exists in inventory by name
    return State.variables.inventory.some(item => item.name === itemName);
};

