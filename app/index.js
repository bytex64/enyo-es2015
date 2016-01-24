// Instead of using package.js, import your dependencies instead.
import './MainView.js';

enyo.kind({
    name: "myapp.Application",
    kind: "enyo.Application",
    view: "myapp.MainView"
});

enyo.ready(function () {
    new myapp.Application({name: "app"});
});
