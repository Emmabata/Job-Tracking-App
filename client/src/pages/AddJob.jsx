import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, redirect, useNavigation, useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';



const AddJob = () => {
    const { user } = useOutletContext();
    const navigation = useNavigation();
    const IsSubmitting = navigation.state === "submitting";
    return ( 
        <Wrapper>
            <Form>
                <h4 method='post' className='form'>add job</h4>
                <div className='form-center'>
                    <FormRow type='text' name='position' />
                    <FormRow type='text' name='company' />
                    <FormRow type='text' labelText='job location' name='jobLocation' defaultValue={user.location} />
                    <FormRowSelect 
                        labelText='job status'
                        name='jobStatus'
                        defaultValue={JOB_STATUS.PENDING}
                        list={Object.values(JOB_STATUS)}
                        />
                    <FormRowSelect 
                        labelText='job type'
                        name='jobType'
                        defaultValue={JOB_TYPE.FULL_TIME}
                        list={Object.values(JOB_TYPE)}
                        />
                    <button 
                        type='submit'
                        className='btn btn-block form-btn'
                        disabled={IsSubmitting}
                        > 
                        {IsSubmitting ? 'submitting' : "submit"}
                        </button>
                </div>
            </Form>
        </Wrapper>
    );
};

export default AddJob;