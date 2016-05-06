Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route("/original", {
    // ...
    contentExperiment: {
        id: "AGV2vvaNRQO1HzHe-Vbbmg",
        variationTemplates: [ "original", "variation1", "variation2" ]
    }
    // ...
});
Router.route("/", {
    name:"home"
});