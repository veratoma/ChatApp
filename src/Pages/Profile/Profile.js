import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useCallback, useState } from "react";
import { toggleShowMyEmail } from '../../Store/profile/action'
import { useDispatch, useSelector } from 'react-redux';



export const Profile = () => {
    const { showMyEmail } = useSelector((state) => state);
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const setCheckedShowMyEmail = useCallback(() => {
        dispatch(toggleShowMyEmail);
    }, [dispatch]);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
     }, []);

     const setName = useCallback(() => {
        dispatch({ type: 'CHANGE_NAME', payload: value })
      }, [dispatch, value]);

    return (
        <div>
            <h1>Имя пользователя</h1>
            <p>Профессия</p>
            <p> Увлечения</p>

            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={showMyEmail} onChange={setCheckedShowMyEmail} />}
                    label="Email:"
                />
            </FormGroup>

            <div>
                <input type="text" value={value} onChange={handleChange} />
            </div>
            <div>
                <button onClick={setName}>Change Name</button>
            </div>

        </div>
    );
}