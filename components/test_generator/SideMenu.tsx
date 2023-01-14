import { Icon } from 'semantic-ui-react';
import styles from '../../styles/Test.module.css';

export default function SideMenu(values) {

    const { 
        openHover, 
        setOpenHover, 
        resize, 
        night, 
        questionColor, 
        setNight, 
        setBackground, 
        setTextColor, 
        setQuestionColor, 
        demo, 
        setDemo, 
        setStudent, 
        setEdit, 
        setClickPassword, 
        setPassword, 
        setAdminPassword, 
        setAdminEmail, 
        setAuth, 
        setIsResetting, 
        setNewPassword, 
        setSave, 
        setCreated, 
        setTitleClicked, 
        setSaveRipple, 
        setResetClicked, 
        setEye, 
        setHide, 
        setUserEmail,
        setOpenModal,
        setResetTernary,
        student,
        created, 
        setFinish,
        adminPassword,
        resetClicked,
        setNewModal,
        setSame
    } = values;

    return (
        <>
            <div
                style={{
                    cursor: "pointer",
                    position: "absolute"
                }}
            >
                {openHover ? (
                <>
                    <div
                        onClick={() => setOpenHover(false)}
                        style={{
                            width: resize ? "300px" : "100vw",
                            // minWidth: '300px',
                            maxWidth: '600px',
                            height: resize ? "100vh" : "100%",
                            background: night ? 'black' : 'white',
                            color: `${questionColor}`,
                            position: "relative",
                            zIndex: "1000",
                            fontSize: "20px",
                            fontWeight: "700",
                            border: night ? "2px solid white" : "2px solid #125CA1"
                        }}
                        className={resize ? styles.menu : styles.dropdown}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginRight: "20px",
                                transform: "translateY(44px)",
                                marginBottom: "30px"
                            }}
                        >
                            <Icon
                                name={resize ? "chevron left" : "chevron up"}
                            />
                        </div>
                        <h1
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                transform: 'translateY(-15px)'
                            }}
                        >
                            Dashboard
                        </h1>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <div
                                style={{
                                    width: "88%",
                                    height: "1px",
                                    background: `${questionColor}`                           
                                }}
                            />
                        </div>
                        {!night ? (
                        <>
                            <div
                                onClick={() => {
                                    setNight(true),
                                    setBackground("black"),
                                    setTextColor("#f2f2f2"),
                                    setQuestionColor("#f2f2f2")
                                }}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    margin: "15px 0px 15px 0px",
                                    padding: '0px'
                                }}
                            >
                                <Icon name="moon" />
                                Night Mode
                            </div>
                        </>
                        ) : (
                        <>
                            <div
                                onClick={() => {
                                    setNight(false),
                                    setBackground("white"),
                                    setTextColor(""),
                                    setQuestionColor("#125CA1")
                                }}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    margin: "15px 0px 15px 0px",
                                    padding: '0px'
                                }}
                            >
                                <Icon name="sun" />
                                Day Mode
                            </div>
                        </>
                        )} 
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <div
                                style={{
                                    width: "88%",
                                    height: "1px",
                                    background: `${questionColor}`  
                                }}
                            />
                        </div>
                        {demo ? (
                            <>
                                <div
                                    onClick={() => {
                                        setDemo(false),
                                        setStudent(false),
                                        setEdit(false),
                                        setClickPassword(true),
                                        setPassword(""),
                                        setAdminPassword(""),
                                        setAdminEmail(""),
                                        setAuth(false),
                                        setIsResetting(false),
                                        setNewPassword(""),
                                        setSave(false),
                                        setCreated(false),
                                        setTitleClicked(false),
                                        setSaveRipple(false),
                                        setResetClicked(false),
                                        setEye(true),
                                        setHide("password"),
                                        setUserEmail("");
                                    }}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        margin: "15px 0px 15px 0px",
                                        color: 'red'
                                    }}
                                >
                                    End Demo Mode
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "88%",
                                            height: "1px",
                                            background: `${questionColor}`,
                                            transform: 'translateY(-0px)'  
                                        }}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    onClick={() => {
                                        setOpenModal(true), 
                                        setStudent(false), 
                                        setResetTernary(false);
                                    }}
                                    style={{
                                        border: '1px solid transparent'
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            margin: "15px 0px 15px 0px"
                                        }}
                                    >
                                        Demo Mode
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "88%",
                                            height: "1px",
                                            background: `${questionColor}`,
                                            transform: 'translateY(0px)'  
                                        }}
                                    />
                                </div>
                            </>
                        )}
                        {!student ? (
                            <>
                                <div>
                                    {created && demo ? (
                                        <>
                                            <div>
                                                <div
                                                    onClick={() => {
                                                        setStudent(true),
                                                        setOpenModal(false),
                                                        setFinish(false),
                                                        setSave(true),
                                                        setDemo(true),
                                                        setNewPassword(""),
                                                        setEye(true),
                                                        setHide("password");
                                                    }}
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        margin: "0px 18px 16px 18px",
                                                        padding: '14.8px'
                                                    }}
                                                    className={night ? styles.takeTestNight : styles.takeTest}
                                                >
                                                    Take Test
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center"
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: "88%",
                                                            height: "1px",
                                                            background: `${questionColor}`,
                                                            transform: 'translateY(-16px)'  
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    ) : null}
                                </div>
                            </>
                        ) : null}
                        {(adminPassword.length > 0 || resetClicked) && student ? (
                            <>
                                <div
                                    onClick={() => {
                                        setNewModal(true), setSame(false);
                                    }}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        margin: "0px 18px 0px 18px",
                                        padding: '14.8px'
                                    }}
                                    className={night ? styles.takeTestNight : styles.takeTest}
                                >
                                    Return to Admin Page
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "88%",
                                            height: "1px",
                                            background: `${questionColor}`  
                                        }}
                                    />
                                </div>
                            </>
                        ) : null}
                        <div
                            style={{
                                height: "20px"
                            }}
                        />
                    </div>
                </>
                ):(
                <>
                    <div
                        onClick={() => setOpenHover(true)}
                        style={{
                            marginTop: resize ? "40px" : "3.8vh",
                            marginLeft: resize ? "30px" : "8px",
                            transform: 'scale(1.3)',
                            color: `${questionColor}`
                        }}
                    >
                        <div
                            style={{
                                width: "50px",
                                position: "relative",
                                transform: "scaleX(2)",
                                left: "30px"
                            }}
                        >
                            <Icon
                                name="minus"
                            />
                        </div>
                        <div
                            style={{
                                width: "50px",
                                position: "relative",
                                transform: "scaleX(2) translateY(-13px)",
                                left: "30px"
                                }}
                        >
                            <Icon
                                name="minus"
                            />
                        </div>
                        <div
                            style={{
                                width: "50px",
                                position: "relative",
                                transform: "scaleX(2) translateY(-26px)",
                                left: "30px"
                                }}
                        >
                            <Icon
                                name="minus"
                            />
                        </div>
                    </div>
                </>
                )}
            </div>
        </>
    );
}
