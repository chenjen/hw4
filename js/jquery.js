$(function() {
  // Document is ready
  render(com.dawgpizza.menu.pizzas, $('.pizza'), $('.pizzas'));
  render(com.dawgpizza.menu.drinks, $('.drink'), $('.drinks'));
  render(com.dawgpizza.menu.desserts, $('.dessert'), $('.desserts'));
});


function render(entries, template, container) {
    var instance;
    container.hide();
    container.empty();

    $.each(entries, function(){
        instance = template.clone();
        for (property in this) {
                 instance.find('.' + property);
                 if (property == 'prices') {
                         instance.find('.' + property).html('$' + this.prices[0] + '/$' + this.prices[1] + '/$' + this.prices[2]);                         
                 } else if (property == 'price'){
                         instance.find('.' + property).html('$' + this[property]);
                 } else {
                        instance.find('.' + property).html(this[property]);   
                 }
        }
        instance.removeClass('template');
        container.append(instance);
        container.fadeIn(500);
    });
}