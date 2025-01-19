import WeatherRow from "../components/WeatherRow";
import WeatherSummary from "../components/WeatherSummary";

const WeatherPage = () => {
    const isDay = false;
    return (
        <div className={isDay ? "app" : "app dark"}>
            <h1 className="ui header">Weather</h1>
            <button className="ui icon button" onClick={()=>{
                console.log("Temparture unit button was clicked.")
            }} style={{float : "right"}}>
                ℉
            </button>
            <div>
                <WeatherSummary/>
                <table className={`ui very basic table dark${!isDay && "dark"}`}>
                    <thead className={`table-custom${!isDay && "dark"}`}>
                    <tr>
                        <th>date</th>
                        <th>temperature</th>
                        <th>type</th>
                    </tr>
                    </thead>
                    <tbody className="table-custom">
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WeatherPage;