import { useEffect } from 'react';
import { getGroupsThunk } from "../../store/groups";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GroupItem from "./GroupItem";
import PlaceholderItem from "./PlaceholderItem";
import './AllGroupsPage.css';


export default function AllGroupsPage() {

    const dispatch = useDispatch();

    const groups = useSelector((state) => state.groups.allGroups);

    const groupsArr = Object.values(groups);

    useEffect(() => {

        dispatch(getGroupsThunk());

    }, [dispatch])

    return (
        groupsArr.length > 0 && <div className="groups-page-container">
            <div className="groups-container">
                <div className="show-all-head">
                    <div className="show-all-header-links">
                        <Link className="show-all-link-active" to='/events'><h2>Events</h2></Link>
                        <h2 className="show-all-link-inactive">Groups</h2>
                    </div>
                    <p>Groups in <span className="get-together-span">GetTogether</span></p>
                </div>
                <div className="event-group-items">
                    {groupsArr.map(g => (<GroupItem key={g.id} group={g} />))}
                </div>
            </div>
        </div>
    )
}
