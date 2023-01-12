import { Button, Icon, Modal } from 'semantic-ui-react';

export default function DemoModal({ openModal, setOpenModal, auth, setAuth, hide, setHide, eye, setEye, creating, clickPassword, setClickPassword, adminEmail, setAdminEmail, validEmail, password, setPassword, setShow, isValid, adminPassword, setAdminPassword, errorCheck, setErrorCheck, matchPass, setFinish, setDemo, setServiceList, setCreating, setSave, setCreated, setTitle, setTitleClicked, setSaveRipple }) {
    return (
        <>
            <Modal
                dimmer
                open={openModal}
                size="small" 
                style={{ 
                    transform: 'translateY(-200px)', 
                    borderRadius: '20px', 
                    position: 'fixed', 
                    height: '400px'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginRight: '10px',
                        fontSize: '40px',
                        color: 'red',
                        cursor: 'pointer'
                    }}
                    onClick={() => {setOpenModal(false), setAuth(false), setHide('password'), setEye(true)}}
                >
                    x
                </div>
                <div
                    style={{
                        transform: 'translateY(10px)'
                    }}
                >
                    {creating ? (
                    <>
                    {clickPassword ? (
                    <>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: '35px',
                                fontWeight: '700',
                                marginBottom: '20px', 
                                marginTop: '3vh'
                            }}
                        >
                            Set Admin Password
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <input
                                placeholder='Admin Email'
                                value={adminEmail}
                                onChange={(e) => {setAdminEmail(e.target.value), validEmail(adminEmail)}}
                                style={{ 
                                    padding: '9px 14px 9px 14px',
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    cursor: 'text',
                                    width: '178.5px',
                                    borderRadius: '4px',
                                    border: '1px solid rgba(34, 36, 38. 0.15)',
                                    position: 'relative',
                                    zIndex: '100',
                                    marginBottom: '10px'
                                }}
                            />
                        </div>
                        {(adminEmail.length > 0 && password.length > 0 && !isValid) ? (
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    transform: 'translateY(8px)',
                                    color: 'red',
                                    fontSize: '15px'
                                }}
                            >
                                Error: Email is Invalid
                            </div>
                        ): null}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '15px'
                            }}
                        >
                            <input
                                type={hide}
                                placeholder='Admin Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ 
                                    padding: '9px 14px 9px 14px',
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    cursor: 'text',
                                    width: '178.5px',
                                    borderRadius: '4px',
                                    border: '1px solid rgba(34, 36, 38. 0.15)',
                                    position: 'relative',
                                    zIndex: '100',
                                    marginBottom: '10px'
                                }}
                            />
                            {eye ? (
                            <>
                                <Icon
                                    name='eye'
                                    onClick={() => {setEye(false), setHide('text'), setShow(true)}}
                                    style={{
                                        transform: 'translate(72px, 14px) scale(1.1)', 
                                        color: '#80808099', 
                                        position: 'absolute', 
                                        zIndex: '100',
                                        cursor: 'pointer'
                                    }}
                                />
                            </>    
                            ):(
                            <>
                                <Icon
                                    name='eye'
                                    onClick={() => {setEye(true), setHide('password'), setShow(false)}}
                                    color='blue'
                                    style={{
                                        transform: 'translate(72px, 14px) scale(1.1)', 
                                        color: '#80808099', 
                                        position: 'absolute', 
                                        zIndex: '100',
                                        cursor: 'pointer'
                                    }}
                                />
                            </>
                            )}
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '20px'
                            }}
                        >
                            <Button
                                disabled={((password.length > 0) && isValid) ? false : true}
                                onClick={() => {setClickPassword(false), setEye(true), setHide('password')}}
                                style={{
                                    border: '2px solid #125CA1',
                                    background: 'transparent',
                                    color: '#125CA1'
                                }}
                            >
                                Set Admin Email & Password
                            </Button>
                        </div>
                    </>
                    ):(
                    <>
                        <div
                            style={{
                                transform: 'translateY(10px)'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontSize: '35px',
                                    fontWeight: '700',
                                    marginBottom: '20px', 
                                    marginTop: '3vh'
                                }}
                            >
                                Login
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <input
                                    type={hide}
                                    placeholder='Admin Password'
                                    value={adminPassword}
                                    onChange={(e) => setAdminPassword(e.target.value)}
                                    style={{ 
                                        padding: '9px 14px 9px 14px',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        cursor: 'text',
                                        width: '178.5px',
                                        borderRadius: '4px',
                                        border: '1px solid rgba(34, 36, 38. 0.15)',
                                        position: 'relative',
                                        zIndex: '100',
                                        marginBottom: '20px'
                                    }}
                                />
                                {eye ? (
                                <>
                                    <Icon
                                        name='eye'
                                        onClick={() => {setEye(false), setHide('text'), setShow(true)}}
                                        style={{
                                            transform: 'translate(72px, 14px) scale(1.1)', 
                                            color: '#80808099', 
                                            position: 'absolute', 
                                            zIndex: '100',
                                            cursor: 'pointer'
                                        }}
                                    />
                                </>    
                                ):(
                                <>
                                    <Icon
                                        name='eye'
                                        onClick={() => {setEye(true), setHide('password'), setShow(false)}}
                                        color='blue'
                                        style={{
                                            transform: 'translate(72px, 14px) scale(1.1)', 
                                            color: '#80808099', 
                                            position: 'absolute', 
                                            zIndex: '100',
                                            cursor: 'pointer'
                                        }}
                                    />
                                </>
                                )}
                            </div>
                        </div>
                        {(!auth && errorCheck) ? (
                        <>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    transform: 'translate(-5px, 50%)',
                                    color: 'red',
                                    fontSize: '20px',
                                    fontWeight: '500',
                                    marginBottom: '30px'
                                }}
                            >
                                Error: Password is Invalid   
                            </div>
                        </>
                        ): null}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center', 
                                marginTop: '15px'
                            }}
                        >
                            <Button
                                disabled={adminPassword.length > 0 ? false : true}
                                onClick={() => {matchPass(), setErrorCheck(true)}}
                                style={{
                                    border: '2px solid #125CA1',
                                    background: 'transparent',
                                    color: '#125CA1'
                                }}
                            >
                                Submit
                            </Button>
                            <Button
                                onClick={() => {setClickPassword(true), setPassword(''), setAdminPassword(''), setAdminEmail(''), setAuth(false), setErrorCheck(false)}}
                                style={{
                                    border: '2px solid red',
                                    background: 'transparent',
                                    color: 'red'
                                }}
                            >
                                Reset Admin Email & Password
                            </Button>
                        </div>
                    </>
                    )}
                    {/* <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        {show ? (
                        <>
                            <Checkbox
                                onClick={() => {setHide('password'), setShow(false)}}
                                label={
                                    <label>
                                        Hide Password
                                    </label>
                                }
                                style={{
                                    marginTop: '15px'
                                }}
                            />
                        </>
                        ):(
                        <>
                            <Checkbox
                                onClick={() => {setHide('text'), setShow(true)}}
                                label={
                                    <label>
                                        Show Password
                                    </label>
                                }
                                style={{
                                    marginTop: '15px'
                                }}
                            />
                        </>
                        )}
                    </div> */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '15px'
                        }}
                    >
                        {auth ? (
                        <>
                            {/* <Button
                                onClick={() => {setStudent(true), setHideAdmin(true), setSave(true), setOpenModal(false), setSame(false), setFinish(false), setDemo(true)}}
                            >
                                Take Test
                            </Button> */}
                            <Button
                                onClick={() => {setOpenModal(false), setFinish(false), setDemo(true), setServiceList([{ id: '', service: '', answer: '', student: '' }]), setSave(false), setCreated(false), setTitle(''), setTitleClicked(false), setSaveRipple(true), setErrorCheck(false)}}
                                style={{
                                    border: '2px solid #21BA45',
                                    background: 'transparent',
                                    color: '#21BA45',
                                    marginTop: '10px'
                                }}
                            >
                                Create New Test
                            </Button>
                        </>
                        ): null}
                    </div>
                    </>
                    ):(
                    <>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '140px'
                            }}
                        >
                            <Button
                                onClick={() => {setCreating(true), setEye(false)}}
                                style={{
                                    border: '2px solid #21BA45',
                                    background: 'transparent',
                                    color: '#21BA45'
                                }}
                            >
                                Create a Test
                            </Button>
                        </div>
                    </>
                    )}
                </div>
            </Modal>
        </>
    );
}
