import { Card } from 'semantic-ui-react';

export default function GradeCard({ student, finish, grade, percent, color, length, letterGrade }) {

    return (
        <>
            <div
                style={{
                    marginBottom: '20px'
                }}
            >
                {student ? (
                <>
                    {finish ? (
                    <>
                        <Card
                            style={{
                                height: '300px'
                            }}
                        >
                            <div
                                style={{
                                    transform: 'translateY(20%)'
                                }}
                            >
                                <div 
                                    style={{ 
                                        marginBottom: '5px',
                                        color: 'black'
                                    }}
                                >
                                    <h1 
                                        style={{ 
                                            display: 'flex', 
                                            justifyContent: 'center'
                                        }}
                                    >
                                        Grade Report
                                    </h1>
                                    <h2
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        Grade: {grade}/{length}
                                    </h2>
                                </div>
                                <h2>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            color: 'black'
                                        }}
                                    >
                                        {percent}%
                                    </div>
                                </h2>
                                <h1 
                                    style={{ 
                                        color: `${color}`, 
                                        paddingBottom: '30px' ,
                                        display: 'flex',
                                        justifyContent: 'center'
                                        }}
                                    >
                                    {(length > 0) ? (
                                    <>
                                        {letterGrade}
                                    </>
                                    ): null}
                                </h1>
                            </div>
                        </Card>
                    </>
                    ): null}
                </>
                ): null}
            </div>
        </>
    );
}
