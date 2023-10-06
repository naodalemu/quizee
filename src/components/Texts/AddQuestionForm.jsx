import classes from "./AddQuestionForm.module.css"

function AddQuestionForm() {
    return (
        <div className={classes.questionForm}>
            <h1>Add a Question</h1> <br/>
            <form className={classes.form}>
                <div className={classes.questionSide}>
                    <h2 className={classes.questionSectionTitle}>Question</h2>
                    <label htmlFor="questionInput">Write the Question here</label>
                    <textarea type="text" id="questionInput" rows="12"></textarea>
                </div>
                <div className={classes.answerSide}>
                    <h2 className={classes.answerSectionTitle}>Answer Options</h2>
                    <div>
                        <label className={classes.addQuestionlabel} htmlFor="a">A</label>
                        <input className={classes.addQuestionInput} type="text" name="answers" id="a" placeholder="Write the Choice for A Here" />
                    </div>
                    <div>
                        <label className={classes.addQuestionlabel}  htmlFor="b">B</label>
                        <input className={classes.addQuestionInput} type="text" name="answers" id="b" placeholder="Write the Choice for B Here" />
                    </div>
                    <div>
                        <label className={classes.addQuestionlabel} htmlFor="c">C</label>
                        <input className={classes.addQuestionInput} type="text" name="answers" id="c" placeholder="Write the Choice for C Here" />
                    </div>
                    <div>
                        <label className={classes.addQuestionlabel} htmlFor="d">D</label>
                        <input className={classes.addQuestionInput} type="text" name="answers" id="d" placeholder="Write the Choice for D Here" />
                    </div>
                    <button className="action">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddQuestionForm;