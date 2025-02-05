import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = (props) => {
    const initialState = {
        boxSize: 'Small',
        boxOwner: '',
    }

    const [formData, setFormData] = useState(initialState)

    const navigate = useNavigate()

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name] : (event.target.value) })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    }

    return (
        <>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label>Boxholder:</label> <br />
                <input type="text" name="boxOwner" value={formData.boxOwner} onChange={handleChange}></input> <br />

                <label htmlFor="boxSize">Select a Box Size:</label> <br />
                <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select> <br />

                <button type="submit">Add Mailbox</button>
            </form>
        </>
    )
}

export default MailboxForm;