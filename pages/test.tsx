import React, { useState } from 'react';
import { Button, Divider, Input } from 'semantic-ui-react';

export default function Test() {
    const [answer1, setAnswer1] = useState<string>('');
    const [answer2, setAnswer2] = useState<string>('');
    const [answer3, setAnswer3] = useState<string>('');
    const [answer4, setAnswer4] = useState<string>('');
    const [answer5, setAnswer5] = useState<string>('');
    const [answer6, setAnswer6] = useState<string>('');
    const [answer7, setAnswer7] = useState<string>('');
    const [answer8, setAnswer8] = useState<string>('');
    const [answer9, setAnswer9] = useState<string>('');
    const [answer10, setAnswer10] = useState<string>('');

    const [question1, setQuestion1] = useState<string>('');
    const [question2, setQuestion2] = useState<string>('');
    const [question3, setQuestion3] = useState<string>('');
    const [question4, setQuestion4] = useState<string>('');
    const [question5, setQuestion5] = useState<string>('');
    const [question6, setQuestion6] = useState<string>('');
    const [question7, setQuestion7] = useState<string>('');
    const [question8, setQuestion8] = useState<string>('');
    const [question9, setQuestion9] = useState<string>('');
    const [question10, setQuestion10] = useState<string>('');

    const [studentAnswer1, setStudentAnswer1] = useState<string>('');
    const [studentAnswer2, setStudentAnswer2] = useState<string>('');
    const [studentAnswer3, setStudentAnswer3] = useState<string>('');
    const [studentAnswer4, setStudentAnswer4] = useState<string>('');
    const [studentAnswer5, setStudentAnswer5] = useState<string>('');
    const [studentAnswer6, setStudentAnswer6] = useState<string>('');
    const [studentAnswer7, setStudentAnswer7] = useState<string>('');
    const [studentAnswer8, setStudentAnswer8] = useState<string>('');
    const [studentAnswer9, setStudentAnswer9] = useState<string>('');
    const [studentAnswer10, setStudentAnswer10] = useState<string>('');

    const [score, setScore] = useState<number>(0);
    const [teacher, setTeacher] = useState<boolean>(true);

    function grade1() {
        if ((answer1.toLowerCase()) === (studentAnswer1.toLowerCase())) {
            // console.log(true);
            setScore(score + 1);
        } else {
            // console.log(false);
            setScore(score + 0);
        }
    }

    function grade2() {
        if ((answer2.toLowerCase()) === (studentAnswer2.toLowerCase())) {
            setScore(score + 1);
        } else {
            setScore(score + 0);
        }
    }

    function grade3() {
        if ((answer3.toLowerCase()) === (studentAnswer3.toLowerCase())) {
            setScore(score + 1);
        } else {
            setScore(score + 0);
        }
    }

    function grade4() {
        if ((answer4.toLowerCase()) === (studentAnswer4.toLowerCase())) {
            setScore(score + 1);
        } else {
            setScore(score + 0);
        }
    }

    function grade5() {
        if ((answer5.toLowerCase()) === (studentAnswer5.toLowerCase())) {
            setScore(score + 1);
        } else {
            setScore(score + 0);
        }
    }

    function grade6() {
        if ((answer6.toLowerCase()) === (studentAnswer6.toLowerCase())) {
            setScore(score + 1);
        } else {
            setScore(score + 0);
        }
    }

    function grade7() {
        if ((answer7.toLowerCase()) === (studentAnswer7.toLowerCase())) {
            setScore(score + 1);
        } else {
            setScore(score + 0);
        }
    }

    function grade8() {
        if ((answer8.toLowerCase()) === (studentAnswer8.toLowerCase())) {
            setScore(score + 1);
        } else {
            setScore(score + 0);
        }
    }

    function grade9() {
        if ((answer9.toLowerCase()) === (studentAnswer9.toLowerCase())) {
            setScore(score + 1);
        } else {
            setScore(score + 0);
        }
    }

    function grade10() {
        if ((answer10.toLowerCase()) === (studentAnswer10.toLowerCase())) {
            setScore(score + 1);
        } else {
            setScore(score + 0);
        }
    }

    let grades = [];

    function gradeAll() {
        //push trues to grades array, then use 'every' method to find length of trues
        if ((answer10.toLowerCase()) === (studentAnswer10.toLowerCase()))  {
            grades.unshift(true);
        } else {
            console.log(false);
        }

        if ((answer9.toLowerCase()) === (studentAnswer9.toLowerCase())) {
            grades.unshift(true);
        } else {
            console.log(false);
        }
    }

    console.log(grades.flat());

    return (
        <>
            <div>
                <Button
                
                >
                    + Add Question
                </Button>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '10px'
                }}
            >
                <Button
                    color='blue'
                    onClick={() => setTeacher(true)}
                >
                    Teacher
                </Button>
                <Button
                    color='red'
                    onClick={() => setTeacher(false)}
                >
                    Student
                </Button>
            </div>
            {teacher ? (
            <>
                <div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Question #1
                            </div>
                            <Input
                                placeholder='question #1'
                                onChange={(e) => setQuestion1(e.target.value)}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Answer #1
                            </div>
                            <Input
                                placeholder='answer #1'
                                onChange={(e) => setAnswer1(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </>
            ): null}
            <h1>
                Question #1: {question1}
            </h1>
            <div>
                <Input
                    placeholder='student answer #1'
                    onChange={(e) => setStudentAnswer1(e.target.value)}
                />
            </div>
            {teacher ? (
            <>
                <div>
                    {answer1}
                </div>
            </>
            ): null}
            <div>
                <Button
                    size='huge'
                    color='green'
                    onClick={grade1}
                >
                    Grade
                </Button>
            </div>
            <Divider />
            {teacher ? (
            <>
                <div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Question #2
                            </div>
                            <Input
                                placeholder='question #2'
                                onChange={(e) => setQuestion2(e.target.value)}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Answer #2
                            </div>
                            <Input
                                placeholder='answer #2'
                                onChange={(e) => setAnswer2(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </>
            ): null}
            <h1>
                Question #2: {question2}
            </h1>
            <div>
                <Input
                    placeholder='student answer #2'
                    onChange={(e) => setStudentAnswer2(e.target.value)}
                />
            </div>
            {teacher ? (
            <>
                <div>
                    {answer2}
                </div>
            </>
            ): null}
            <div>
                <Button
                    size='huge'
                    color='green'
                    onClick={grade2}
                >
                    Grade
                </Button>
            </div>
            <Divider />
            {teacher ? (
            <>
                <div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Question #3
                            </div>
                            <Input
                                placeholder='question #3'
                                onChange={(e) => setQuestion3(e.target.value)}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Answer #3
                            </div>
                            <Input
                                placeholder='answer #3'
                                onChange={(e) => setAnswer3(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </>
            ): null}
            <h1>
                Question #3: {question3}
            </h1>
            <div>
                <Input
                    placeholder='student answer #3'
                    onChange={(e) => setStudentAnswer3(e.target.value)}
                />
            </div>
            {teacher ? (
            <>
                <div>
                    {answer3}
                </div>
            </>
            ): null}
            <div>
                <Button
                    size='huge'
                    color='green'
                    onClick={grade3}
                >
                    Grade
                </Button>
            </div>
            <Divider />
            {teacher ? (
            <>
                <div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Question #4
                            </div>
                            <Input
                                placeholder='question #4'
                                onChange={(e) => setQuestion4(e.target.value)}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Answer #4
                            </div>
                            <Input
                                placeholder='answer #4'
                                onChange={(e) => setAnswer4(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </>
            ): null}
            <h1>
                Question #4: {question4}
            </h1>
            <div>
                <Input
                    placeholder='student answer #4'
                    onChange={(e) => setStudentAnswer4(e.target.value)}
                />
            </div>
            {teacher ? (
            <>
                <div>
                    {answer4}
                </div>
            </>
            ): null}
            <div>
                <Button
                    size='huge'
                    color='green'
                    onClick={grade4}
                >
                    Grade
                </Button>
            </div>
            <Divider />
            {teacher ? (
            <>
                <div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Question #5
                            </div>
                            <Input
                                placeholder='question #5'
                                onChange={(e) => setQuestion5(e.target.value)}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Answer #5
                            </div>
                            <Input
                                placeholder='answer #5'
                                onChange={(e) => setAnswer5(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </>
            ): null}
            <h1>
                Question #5: {question5}
            </h1>
            <div>
                <Input
                    placeholder='student answer #5'
                    onChange={(e) => setStudentAnswer5(e.target.value)}
                />
            </div>
            {teacher ? (
            <>
                <div>
                    {answer5}
                </div>
            </>
            ): null}
            <div>
                <Button
                    size='huge'
                    color='green'
                    onClick={grade5}
                >
                    Grade
                </Button>
            </div>
            <Divider />
            {teacher ? (
            <>
                <div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Question #6
                            </div>
                            <Input
                                placeholder='question #6'
                                onChange={(e) => setQuestion6(e.target.value)}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Answer #6
                            </div>
                            <Input
                                placeholder='answer #6'
                                onChange={(e) => setAnswer6(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </>
            ): null}
            <h1>
                Question #6: {question6}
            </h1>
            <div>
                <Input
                    placeholder='student answer #6'
                    onChange={(e) => setStudentAnswer6(e.target.value)}
                />
            </div>
            {teacher ? (
            <>
                <div>
                    {answer6}
                </div>
            </>
            ): null}
            <div>
                <Button
                    size='huge'
                    color='green'
                    onClick={grade6}
                >
                    Grade
                </Button>
            </div>
            <Divider />
            {teacher ? (
            <>
                <div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Question #7
                            </div>
                            <Input
                                placeholder='question #7'
                                onChange={(e) => setQuestion7(e.target.value)}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Answer #7
                            </div>
                            <Input
                                placeholder='answer #7'
                                onChange={(e) => setAnswer7(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </>
            ): null}
            <h1>
                Question #7: {question7}
            </h1>
            <div>
                <Input
                    placeholder='student answer #7'
                    onChange={(e) => setStudentAnswer7(e.target.value)}
                />
            </div>
            {teacher ? (
            <>
                <div>
                    {answer7}
                </div>
            </>
            ): null}
            <div>
                <Button
                    size='huge'
                    color='green'
                    onClick={grade7}
                >
                    Grade
                </Button>
            </div>
            <Divider />
            {teacher ? (
            <>
                <div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Question #8
                            </div>
                            <Input
                                placeholder='question #8'
                                onChange={(e) => setQuestion8(e.target.value)}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Answer #8
                            </div>
                            <Input
                                placeholder='answer #8'
                                onChange={(e) => setAnswer8(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </>
            ): null}
            <h1>
                Question #8: {question8}
            </h1>
            <div>
                <Input
                    placeholder='student answer #8'
                    onChange={(e) => setStudentAnswer8(e.target.value)}
                />
            </div>
            {teacher ? (
            <>
                <div>
                    {answer8}
                </div>
            </>
            ): null}
            <div>
                <Button
                    size='huge'
                    color='green'
                    onClick={grade8}
                >
                    Grade
                </Button>
            </div>
            <Divider />
            {teacher ? (
            <>
                <div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Question #9
                            </div>
                            <Input
                                placeholder='question #9'
                                onChange={(e) => setQuestion9(e.target.value)}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Answer #9
                            </div>
                            <Input
                                placeholder='answer #9'
                                onChange={(e) => setAnswer9(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </>
            ): null}
            <h1>
                Question #9: {question9}
            </h1>
            <div>
                <Input
                    placeholder='student answer #9'
                    onChange={(e) => setStudentAnswer9(e.target.value)}
                />
            </div>
            {teacher ? (
            <>
                <div>
                    {answer9}
                </div>
            </>
            ): null}
            <div>
                <Button
                    size='huge'
                    color='green'
                    onClick={grade9}
                >
                    Grade
                </Button>
            </div>
            <Divider />
            {teacher ? (
            <>
                <div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Question #10
                            </div>
                            <Input
                                placeholder='question #10'
                                onChange={(e) => setQuestion10(e.target.value)}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div>
                                Set Answer #10
                            </div>
                            <Input
                                placeholder='answer #10'
                                onChange={(e) => setAnswer10(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </>
            ): null}
            <h1>
                Question #10: {question10}
            </h1>
            <div>
                <Input
                    placeholder='student answer #10'
                    onChange={(e) => setStudentAnswer10(e.target.value)}
                />
            </div>
            {teacher ? (
            <>
                <div>
                    {answer10}
                </div>
            </>
            ): null}
            <div>
                <Button
                    size='huge'
                    color='green'
                    onClick={grade10}
                >
                    Grade
                </Button>
            </div>
            <Divider />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Button
                    color='green'
                    onClick={gradeAll}
                >
                    Grade All
                </Button>
            </div>
            <Divider />
            <h1>
                Score: {score}
            </h1>
        </>
    )
}
