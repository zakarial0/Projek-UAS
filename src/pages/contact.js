import React from "react";
import Layout from "../components/layout";
import { LocationMarkerIcon, MailIcon, PhoneIncomingIcon  } from "@heroicons/react/solid";
import { Link } from "gatsby";

const reachBy = [
  {
    name: 'Address',
    description: 'Desa Sukamantri Kec. Pasar Kemis Kab. Tangerang, Prov. Banten',
    goTo: 'https://maps.google.com/maps?width=400&amp;height=600&amp;hl=en&amp;q=areta%20informatics%20college%20+(Sumber%20Pasir)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
    icon: LocationMarkerIcon,
  },
  {
    name: 'Email',
    description: 'alhikmahiic@sch.id',
    goTo: 'https://email/alhikmahiic@sch.id',
    icon: MailIcon,
  },
  {
    name: 'Whatsapp',
    description: '0812-3589-1769',
    goTo: 'https://wa.me/081235891769',
    icon: PhoneIncomingIcon,
  },
]

const KontakPage = () => {
    return(
        <Layout>

        <div>
          <h1 className="font-bold text-2xl text-center py-10">Contact US</h1>
        </div>

        <div className=" w-full ">
          <div className="flex items-center bg-white mx-16 mb-20  rounded-tr-xl rounded-br-xl">
          <div className="">
          <iframe width="700" height="400" frameborder="0" title="location-on-maps" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=600&amp;hl=en&amp;q=areta%20informatics%20college%20+(Sumber%20Pasir)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.gps.ie/" className="gmaps">gps tracker sport</a></iframe>
        </div>
          <div className="mx-10">
          <dl className="space-y-12 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-12">
            {reachBy.map(reachBy => (
              <div key={reachBy.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                    <reachBy.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{reachBy.name}</p>
                </dt>
                <dd className="mt-1 ml-16 text-base text-gray-600">
                  <Link to={reachBy.goTo}>
                    {reachBy.description}
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        </div>
      </div>
      </Layout>
    )
}

export default KontakPage;