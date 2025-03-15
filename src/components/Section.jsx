import React from "react";
import { motion } from "framer-motion";

export default function Section({
  id,
  title,
  text,
  steps,
  insights,
  datasetLink,
  image,
  questions,
  references,
  description,
  graphs,
  children,
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto py-12 px-6 border-b border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-4xl font-bold border-b-4 border-blue-600 inline-block pb-2">
        {title}
      </h2>

      {text && <p className="mt-4 text-lg leading-relaxed">{text}</p>}
      {description && (
        <p className="mt-4 text-lg leading-relaxed">{description}</p>
      )}

      {steps && (
        <div className="mt-6">
          <h4 className="text-xl font-semibold">Steps:</h4>
          <ul className="list-disc list-inside mt-2 space-y-2">
            {steps.map((step, index) => (
              <li key={index} className="text-lg">
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}

      {insights &&
        insights.map((insight, index) => (
          <p key={index} className="mt-4 text-lg">
            {insight}
          </p>
        ))}

      {/* ✅ Research Questions */}
      {questions && (
        <ul className="mt-4 list-disc list-inside text-lg font-semibold">
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      )}

      {datasetLink && (
        <p className="mt-6">
          <a
            href={datasetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-all duration-200 ease-in-out"
          >
            🔗 View Dataset
          </a>
        </p>
      )}

      {image && (
        <img
          src={image}
          alt={title}
          className="mt-6 rounded-lg shadow-lg mx-auto max-w-full"
        />
      )}

      {references && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">References</h3>
          <ul className="mt-4 list-disc list-inside text-lg">
            {references.map((ref, index) => (
              <li key={index}>
                <a
                  href={ref.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {ref.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Render Graphs if Available */}
      {graphs &&
        graphs.map((graph, index) => (
          <div key={index} className="mt-8">
            <h3 className="text-xl font-semibold">{graph.title}</h3>
            <p className="mt-2">{graph.description}</p>
            {graph.data && graph.data.length > 0 ? (
              <Chart
                data={graph.data}
                type={graph.type}
                dataKey={graph.dataKey}
              />
            ) : (
              <p className="text-red-500">No data available for this graph.</p>
            )}
          </div>
        ))}

      {/* ✅ Ensure children components are rendered if passed */}
      {children && <div className="mt-8">{children}</div>}
    </motion.section>
  );
}
