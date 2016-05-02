Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route("routeName", {
    // ...
    contentExperiment: {
        id: "YOUR_EXPERIMENT_ID",
        variationTemplates: [ "original", "variation1", "variation2" ]
    }
    // ...
});