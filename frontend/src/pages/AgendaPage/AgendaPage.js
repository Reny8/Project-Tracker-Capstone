import React from 'react';
import CalendarDisplay from '../../components/Calendar/Calendar';
const AgendaPage = (props) => {
    return (<div>
        <CalendarDisplay tasks ={props.tasks} projects={props.projects}/>
    </div>  );
}
 
export default AgendaPage;