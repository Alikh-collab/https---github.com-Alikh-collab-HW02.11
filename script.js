const book = {
    // Қасиеттер
    title: "Шабыт құдіреті",
    author: "Әл-Фараби",
    pages: 200,
    isRead: false,

    readBook: function() {
        console.log(`Сіз "${this.title}" кітабын ${this.author} жазған оқып жатырсыз.`);
    },

    toggleReadStatus: function() {
        this.isRead = this.isRead;
        console.log(`Оқу күйі жаңартылды: ${this.isRead}`);
    }
};


book.readBook();
book.toggleReadStatus();