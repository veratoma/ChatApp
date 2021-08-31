import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useCallback } from "react";
import { toggleShowMyEmail } from '../../Store/actions/action'
import { useDispatch, useSelector } from 'react-redux';



export const Profile = () => {
    const { showMyEmail } = useSelector((state) => state);

    const dispatch = useDispatch();

    const setCheckedShowMyEmail = useCallback(() => {
        dispatch(toggleShowMyEmail);
    }, [dispatch]);

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
        </div>
    );
}