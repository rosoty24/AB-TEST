Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route("/ab", {
    // ...
    name:"ab1",
    contentExperiment: {
        id: "YOUR_EXPERIMENT_ID",
        variationTemplates: [ "original", "variation1", "variation2" ]
    }
    // ...
});
Router.route("/test", {
    name:"ab"
});