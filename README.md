# ewic.us

This is a recreation of my personal website, this time using [LoopBack](http://loopback.io).

### Notes

Rendering templates is convoluted.  The `render()` function in each view contains this:

```
$(this.el).html(this.template({items: this.items}));
```

This looks stupid and confusing.  The reason for this is that underscore templates are generated via _.template(string templateString, json templateSettings).  Notice that there is no argument for local variables to be passed into the template.  In order to do that, the variables must be passed as an argument to the template object itself, not at the time of instantiation.

This is why the view's local template variable object is instantiated as `_.template("")` and filled in later.  This ensures that if we fail to request the template file for some reason, we'll just have an empty template that will at least understand the variables it's passed.  I'm torn on whether this is the best solution or not, since it arguable adds an extra layer of abstraction to the template rendering process.

Thus, the above code could be read as "replace the target element's html with the template rendered with the passed-in collection of variables".

UPDATE: Just found out that if you pass nothing, the underscore template is aware of the models in the Backbone Collection for some reason!  This makes rendering collections through templates simple.

## Photo Rendering

A photo view is rendered using Backbone's render method.  The way it works is that the $el attribute of the view is set to be an element containing raw html that is generated from the underscore template.

The photos collection is passed an array of models from which it generates individual photo views for each photo.