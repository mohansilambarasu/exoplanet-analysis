import React from "react";
import Section from "../components/Section";
import Chart from "../components/Chart";
import content from "../content";

const Analysis = () => {
  return (
    <div>
      {content.analysis.map((item, index) => (
        <Section
          key={index}
          id={`analysis-${index}`}
          title={item.title}
          description={item.description}
          steps={item.steps}
          insights={item.insights}
          image={item.image}
        >
          {item.graphs &&
            item.graphs.map((graph, gIndex) => (
              <div key={gIndex} className="mt-8">
                <h3 className="text-xl font-semibold">{graph.title}</h3>
                <p className="mt-2">{graph.description}</p>
                {graph.data && graph.data.length > 0 ? (
                  <Chart
                    data={graph.data}
                    type={graph.type}
                    dataKey={graph.dataKey}
                  />
                ) : (
                  <p className="text-red-500">
                    No data available for this graph.
                  </p>
                )}
              </div>
            ))}
        </Section>
      ))}
    </div>
  );
};

export default Analysis;
