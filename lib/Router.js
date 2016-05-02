Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route("/test", {
    // ...
    contentExperiment: {
        id: "YOUR_EXPERIMENT_ID",
        variationTemplates: [ "original", "variation1", "variation2" ]
    }
    // ...
});
Router.route("/", {
    name:"home"
});