import Layout from "@/components/Layout";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Layout title="Contact Intimacy Records">
      <div className="shadow p-3 mb-5 brandbg rounded whitefont ">
        <h4 className="text-center text-uppercase ">
          <strong>Contact Us</strong>
        </h4>
        <div className="container ">
          <div className="text-justify text-center">
            <div>
              <p className="text-justify text-center p-3 ">
                We Want to hear from you, if you have what you think it takes to
                make it in the music industry. Drop us an email directly at
                contact@intimacyrecords.co.uk
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
