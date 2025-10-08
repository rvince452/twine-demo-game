Macro.add("shout", {
    handler() {
        const msg = this.payload[0].contents.trim();
        new Wikifier(this.output, `<strong>${msg.toUpperCase()}!</strong>`);
    }
});

function makeSpeakerMacro(name, cssClass) {
    const finalClass = cssClass || name.toLowerCase();

    Macro.add(name.toLowerCase(), {
        tags: null, // container macro
        handler() {
            const text = this.payload[0].contents;

            // Create wrapper element
            const wrapper = document.createElement("div");
            wrapper.classList.add("speaker", finalClass);

            // Only show the label if not 'nar'
            if (name.toLowerCase() !== "nar") {
                const bold = document.createElement("b");
                bold.textContent = name + ": ";
                wrapper.appendChild(bold);
            }

            // Wikify the inner text
            new Wikifier(wrapper, text);

            // Append to passage
            this.output.append(wrapper);
        }
    });
}
makeSpeakerMacro("Katie")
makeSpeakerMacro("nar")
makeSpeakerMacro("Heather")
makeSpeakerMacro("Susan")
makeSpeakerMacro("Al")
makeSpeakerMacro("You")


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