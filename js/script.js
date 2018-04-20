$(function () {

    // FUNCTION GENERATING ID  
    function randomString() {
        var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var str = '';
        for (var i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }
    // CREATING COLUMNS COMPONENTS
    function Column(name) {
        var self = this; //useful for nested functions, maintains context

        this.id = randomString();
        this.name = name;
        this.$element = createColumn();

        function createColumn() {
            var $column = $('<div>').addClass('column');
            var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
            var $columnCardList = $('<ul>').addClass('column-card-list');
            var $columnDelete = $('<button>').addClass('btn-delete').text('x');
            var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');

            // ADDING EVENT LISTENERS
            $columnDelete.click(function() {
                self.removeColumn();
            });
            $columnAddCard.click(function() {
                self.addCard(new Card(prompt('Enter the name of the card')));
            });
            // CREATING COLUMN ELEMENTS
            $column.append($columnTitle)
                    .append($columnDelete)
                    .append($columnAddCard)
                    .append($columnCardList);

            // RETURNING CREATED COLUMN
            return $column;
        }
    } // end of Column();

    Column.prototype = {
        addCard: function(card) {
            this.$element.children('ul').append(card.$element);
        },
        removeColumn: function() {
            this.$element.remove();
        }
    };
    // zaczynam tutaj od klay Card
})