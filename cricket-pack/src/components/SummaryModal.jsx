import { motion } from "framer-motion";

const SummaryModal = ({ cards, onClose }) => {
  const counts = cards.reduce((acc, c) => {
    acc[c.tier] = (acc[c.tier] || 0) + 1;
    return acc;
  }, {});

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white p-6 rounded-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Pack Summary</h2>
        {Object.keys(counts).map((tier) => (
          <p key={tier}>
            {tier}: {counts[tier]}
          </p>
        ))}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default SummaryModal;
