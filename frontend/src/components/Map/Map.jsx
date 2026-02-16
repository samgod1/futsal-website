import { MapContainer, TileLayer, Marker } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./Map.css";

const location = [27.713984892107838, 85.30817070792934];
const Map = () => {
	return (
		<div className="map-container">
			<MapContainer
				center={location}
				zoom={18}
				style={{
					height: "400px",
					width: "100%",
					borderRadius: ".5rem",
					position: "relative",
					zIndex: 1,
					border: "2px solid var(--c-gray)",
				}}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={location} />
			</MapContainer>
			<a
				href="https://www.google.com/maps/place/Kumari+Futsal+and+snooker/@27.7139297,85.2978164,15z/data=!3m1!4b1!4m6!3m5!1s0x39eb18fb7ea82b97:0x533a5f813eec590f!8m2!3d27.7139301!4d85.3081162!16s%2Fg%2F11c549w0b4?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
				target="_blank"
				className="google-maps-link"
			>
				<img
					src="/images/google-maps.svg"
					alt="google maps"
					width={32}
					height={32}
				/>
				Open in google maps
			</a>
		</div>
	);
};

export default Map;
