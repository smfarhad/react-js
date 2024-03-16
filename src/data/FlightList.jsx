import jsonData from './FlightData.json'
import {cloneDeep} from 'lodash'

export default function FlightList() {
    const loadData = () => cloneDeep(jsonData);
    return loadData;
}