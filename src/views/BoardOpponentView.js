import { MinionCardOpponentBoardView } from './MinionCardOpponentBoardView.js'

export class BoardOpponentView {
    constructor(board) {
        this.board = board;
        this.cardViews = [];
        this.update();
    }

    getElement() {
        return document.getElementById('board--opponent');
    }

    addCard(card, position) {
        this.board.addCard(card, position);
        this.update();
    }

    removeCard(index) {
        this.board.removeCard(index);
        this.update();
    }

    update() {
        this.getElement().replaceChildren();
        this.cardViews = [];

        let currentIndex = 0;
        this.board.cards.forEach(i => {
            const view = new MinionCardOpponentBoardView(i, currentIndex);
            this.cardViews.push(view);
            this.getElement().appendChild(view.getElement());
            currentIndex++;
        });
    }
}
