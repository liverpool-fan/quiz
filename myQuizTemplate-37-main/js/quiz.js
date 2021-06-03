class Quiz {
    // Some change here for illustration purposes
    constructor(){
    }
    getState(){
        database.ref("gameState").on("value",function(data){
    gameState = data.val()
        })
    }
    updateState(state){
    database.ref("/").update({gameState:state})
    }

    async start(){
        if (gameState === 0){
            coontestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once('value');
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestantCount.getCount();
            }
            question = new Question();
            question.display()
        }
    }
}