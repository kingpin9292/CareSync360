import AppointmentForm from "@/components/forms/AppointmentForm";
import PatientForm from "@/components/forms/PatientForm";
import { getPatient } from "@/lib/actions/patient.actions";

import Image from "next/image";
import Link from "next/link";

const NewAppointment = async ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = await params;
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-215 flex-1 justify-between">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-10 w-fit"
            />
          </Link>

          <AppointmentForm type="create" userId={userId} patientId={patient.$id} name={patient.name} />
          <p className="copyright mt-10 py-12">© 2026 CareSync360</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-97.5 bg-bottom"
      />
    </div>
  );
};
export default NewAppointment;
