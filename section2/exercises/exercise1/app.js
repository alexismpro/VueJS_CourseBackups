new Vue({
    el: "#exercise",
    data: {
        name: "Alexis Michaud",
        age: "19",
        link: "data:image/jpeg;base64,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"
    },
    methods: {
        outputR: function () {
            return Math.random();
        },
    },
});