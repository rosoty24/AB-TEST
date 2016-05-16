Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route("/ab", {
    // ...
    contentExperiment: {
        id: "a3uG9s1RR-S_-fdva56bRw",
        variationTemplates: [ "original", "variation1", "variation2" ]
    }
    // ...
});
Router.route("/", {
    name:"home"
});
Router.route("/variation1", {
    name:"variation1"
});
Router.route("/variation2", {
    name:"variation2"
});
Router.route("/original", {
    name:"original"
});