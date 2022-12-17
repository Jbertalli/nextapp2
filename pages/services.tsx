import React, { useState } from 'react';

export default function Services() {

    const [serviceList, setServiceList] = useState([{ service: '' }]);

    console.log(serviceList);

    const handleServiceRemove = (index) => {
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
    }

    const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    }

    const handleAddService = () => {
        setServiceList([...serviceList, { service: '' }])
    }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    transform: 'translateY(50vh)'
                }}
            >
                <form autoComplete='off'>
                    <div>
                        {serviceList.map((singleService, index) => (
                            <div key={index}>
                                <div>
                                    <input
                                        name='service'
                                        type='text'
                                        id='service'
                                        required
                                        value={singleService.service}
                                        onChange={(e) => handleServiceChange(e, index)}
                                    />
                                    {serviceList.length - 1 === index && serviceList.length < 4 && (
                                        <button
                                            type='button'
                                            onClick={handleAddService}
                                        >
                                        <span>Add a Service</span>
                                        </button>
                                    )}
                                </div>
                                <div>
                                    {serviceList.length !== 1 && (
                                        <button
                                            type='button'
                                            onClick={() => handleServiceRemove(index)}
                                        >
                                            <span>Remove</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2>Output</h2>
                        {serviceList &&
                            serviceList.map((singleService, index) => (
                                <ul key={index}>
                                    {singleService.service && <li>{singleService.service}</li>}
                                </ul>
                            ))}
                    </div>
                </form>
            </div>
        </>
    )
}
