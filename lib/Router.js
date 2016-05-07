Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route("/ab", {
    // ...
    contentExperiment: {
        id: "vs-aVXqORqGOYQqH0u9Eow",
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