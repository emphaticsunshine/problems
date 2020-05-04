/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let output = new Array(board.length);
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(!(i in output)) {
                output[i] = [];
            }
            
            const liveNeighbors = getLiveNeighbors(i, j, board);
            output[i][j] = board[i][j];
            if(board[i][j] === 1) {
                if(liveNeighbors < 2 || liveNeighbors > 3) {
                    output[i][j] = 0;
                } 
            } else {
                if(liveNeighbors === 3) {
                    output[i][j] = 1;
                }
            }
        }
    }
    return output;
};

function getLiveNeighbors(i, j, board) {
    let liveNeighbors = 0;
    if(i !== 0) {
        liveNeighbors += board[i - 1][j];
        if(j !== 0) {
            liveNeighbors += board[i - 1][j - 1];
        }
        
        if(j < board[i - 1].length - 1) {
            liveNeighbors += board[i - 1][j + 1];
        }
    }
    
    if(i < board.length - 1) {
        liveNeighbors += board[i + 1][j];
        
        if(j !== 0) {
            liveNeighbors += board[i + 1][j - 1];
        }
        
        if(j < board[i + 1].length - 1) {
            liveNeighbors += board[i + 1][j + 1];
        }
    }
    
    if(j !== 0) {
        liveNeighbors += board[i][j - 1];
    }
    
    if(j < board[i].length - 1) {
            liveNeighbors += board[i][j + 1];
    }
    
    return liveNeighbors;
}

module.exports = {
    "name": "Game of Life",
    program: gameOfLife
};