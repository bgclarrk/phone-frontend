import { useSelector } from 'react-redux';

export const CallDetails = () => {
    const call = useSelector(state => state.call)

        if (call.status) {
            return (
                <div className="row details">
                    <div className="col-8">
                        <p className="text-left">Call Started</p>
                    </div>
                    <div className="col-4">
                        <p className="text-right">{call.duration}</p>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }

}