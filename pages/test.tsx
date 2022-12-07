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
    const [count, setCount] = useState<number>(0);

    const [gradeArray1, setGradeArray1] = useState<Object>([0]);
    const [gradeArray2, setGradeArray2] = useState<Object>([0]);
    const [gradeArray3, setGradeArray3] = useState<Object>([0]);
    const [gradeArray4, setGradeArray4] = useState<Object>([0]);
    const [gradeArray5, setGradeArray5] = useState<Object>([0]);
    const [gradeArray6, setGradeArray6] = useState<Object>([0]);
    const [gradeArray7, setGradeArray7] = useState<Object>([0]);
    const [gradeArray8, setGradeArray8] = useState<Object>([0]);
    const [gradeArray9, setGradeArray9] = useState<Object>([0]);
    const [gradeArray10, setGradeArray10] = useState<Object>([0]);

    let grades1 = []
    let grades2 = []
    let grades3 = []
    let grades4 = []
    let grades5 = []
    let grades6 = []
    let grades7 = []
    let grades8 = []
    let grades9 = []
    let grades10 = []

    function gradeAll() {

        if ((answer1.length > 0 && studentAnswer1.length > 0) && (answer1.toLowerCase()) === (studentAnswer1.toLowerCase())) {
            grades1.unshift(1);
            setGradeArray1(grades1);
        } else {
            grades1.unshift(0);
            setGradeArray1(grades1);
        }

        if ((answer2.length > 0 && studentAnswer2.length > 0) && (answer2.toLowerCase()) === (studentAnswer2.toLowerCase())) {
            grades2.unshift(1);
            setGradeArray2(grades2);
        } else {
            grades2.unshift(0);
            setGradeArray2(grades2);
        }

        if ((answer3.length > 0 && studentAnswer3.length > 0) && (answer3.toLowerCase()) === (studentAnswer3.toLowerCase())) {
            grades3.unshift(1);
            setGradeArray3(grades3);
        } else {
            grades3.unshift(0);
            setGradeArray3(grades3);
        }

        if ((answer4.length > 0 && studentAnswer4.length > 0) && (answer4.toLowerCase()) === (studentAnswer4.toLowerCase())) {
            grades4.unshift(1);
            setGradeArray4(grades4);
        } else {
            grades4.unshift(0);
            setGradeArray4(grades4);
        }

        if ((answer5.length > 0 && studentAnswer5.length > 0) && (answer5.toLowerCase()) === (studentAnswer5.toLowerCase())) {
            grades5.unshift(1);
            setGradeArray5(grades5);
        } else {
            grades5.unshift(0);
            setGradeArray5(grades5);
        }

        if ((answer6.length > 0 && studentAnswer6.length > 0) && (answer6.toLowerCase()) === (studentAnswer6.toLowerCase())) {
            grades6.unshift(1);
            setGradeArray6(grades6);
        } else {
            grades6.unshift(0);
            setGradeArray6(grades6);
        }

        if ((answer7.length > 0 && studentAnswer7.length > 0) && (answer7.toLowerCase()) === (studentAnswer7.toLowerCase())) {
            grades7.unshift(1);
            setGradeArray7(grades7);
        } else {
            grades7.unshift(0);
            setGradeArray7(grades7);
        }

        if ((answer8.length > 0 && studentAnswer8.length > 0) && (answer8.toLowerCase()) === (studentAnswer8.toLowerCase())) {
            grades8.unshift(1);
            setGradeArray8(grades8);
        } else {
            grades8.unshift(0);
            setGradeArray8(grades8);
        }

        if ((answer9.length > 0 && studentAnswer9.length > 0) && (answer9.toLowerCase()) === (studentAnswer9.toLowerCase())) {
            grades9.unshift(1);
            setGradeArray9(grades9);
        } else {
            grades9.unshift(0);
            setGradeArray9(grades9);
        }

        if ((answer10.length > 0 && studentAnswer10.length > 0) && (answer10.toLowerCase()) === (studentAnswer10.toLowerCase()))  {
            grades10.push(1);
            setGradeArray10(grades10);
        } else {
            grades10.push(0);
            setGradeArray10(grades10);
        }
    }

    let finalGrade = gradeArray1[0] + gradeArray2[0] + gradeArray3[0] + gradeArray4[0] + gradeArray5[0] + gradeArray6[0] + gradeArray7[0] + gradeArray8[0] + gradeArray9[0] + gradeArray10[0]

    console.log(finalGrade);

    return (
        <>
            <div
                style={{
                    transform: 'translateY(50px)'
                }}
            >
                <Button
                    onClick={() => setCount(count + 1)}
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
            <Divider />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Button
                    color='green'
                    onClick={() => {gradeAll(), setScore(finalGrade)}}
                >
                    Grade
                </Button>
            </div>
            <Divider />
            <h1>
                Score: {
                    gradeArray1[0] + gradeArray2[0] + gradeArray3[0] + gradeArray4[0] + gradeArray5[0] + gradeArray6[0] + gradeArray7[0] + gradeArray8[0] + gradeArray9[0] + gradeArray10[0]
                } / {count}
            </h1>
        </>
    )
}
