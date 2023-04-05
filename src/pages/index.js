import Header from "@/layout/header";
import Footer from "@/layout/footer";
import axios from "axios";

export default function Home({country}) {
    console.log(country)
    return (
        <div>
            <Header country={country}/>
            <Footer country={country}/>
        </div>
    )
}

export async function getServerSideProps() {
    const response = await axios.get(`https://api.ipregistry.co/?key=${process.env.IP_REGISTER}`)
        .catch((err) => {
            console.log(err)
        })

    const data = await response.data.location.country

    return {
        props: {
            // country: data
            country: {name: "Ukraine", flag: "/images/UA.png"}
        }
    }
}
