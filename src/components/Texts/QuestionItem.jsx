import classes from "./QuestionItem.module.css"

function QuestionItem(props) {
    return (
        <div className={classes.container}>
            <h3 className={classes.question}>{props.value+1}. {props.question}</h3>
            <div className={classes.questionItemPair}>
                <label className={classes.questionItemLable} htmlFor="a">A: {props.a}</label>
                <input className={classes.questionItemInput} type="radio" id="a" name="choice" />
            </div>
            <div className={classes.questionItemPair}>
                <label className={classes.questionItemLable} htmlFor="b">B: {props.b}</label>
                <input className={classes.questionItemInput} type="radio" id="b" name="choice" />
            </div>
            <div className={classes.questionItemPair}>
                <label className={classes.questionItemLable} htmlFor="c">C: {props.c}</label>
                <input className={classes.questionItemInput} type="radio" id="c" name="choice" />
            </div>
            <div className={classes.questionItemPair}>
                <label className={classes.questionItemLable} htmlFor="d">D: {props.d}</label>
                <input className={classes.questionItemInput} type="radio" id="d" name="choice" />
            </div>
        </div>
    )
}

export default QuestionItem;