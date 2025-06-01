export default function TestimonialCard({ testimonial }) {
  return (
    <div className="border-l-4 border-blue-600 bg-gray-50 p-4 rounded shadow">
      <p className="italic">"{testimonial.text}"</p>
      <p className="mt-2 font-semibold text-right">- {testimonial.name}</p>
    </div>
  );
}
