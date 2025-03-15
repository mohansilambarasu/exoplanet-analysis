import { useState, useEffect } from "react";
import { useDarkMode } from "./context/DarkModeContext";
import Home from "./sections/Home";
import Analysis from "./sections/Analysis";
import Section from "./components/Section";
import DarkModeToggle from "./components/DarkModeToggle";
import Loader from "./components/Loader";
import content from "./content";

const App = () => {
  const { darkMode } = useDarkMode();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <DarkModeToggle />
      <Home />
      <div className="border-t border-gray-300 dark:border-gray-600 my-6" />
      <Section title={content.about.title} text={content.about.insights} />
      <Section
        title={content.introduction.title}
        text={content.introduction.text}
      />
      <Section
        title={content.literatureReview.title}
        text={content.literatureReview.text}
        references={content.literatureReview.references}
      />
      <Section
        title={content.dataset.title}
        text={content.dataset.text}
        datasetLink={content.dataset.datasetLink}
        image={content.dataset.image}
      />
      <Section
        title={content.researchQuestions.title}
        questions={content.researchQuestions.questions}
      />
      <Section
        title={content.toolsAndMethods.title}
        text={content.toolsAndMethods.text}
      />
      <Analysis />
      <Section
        title={content.limitations.title}
        text={content.limitations.text}
      />
      <Section
        title={content.conclusion.title}
        text={content.conclusion.text}
      />
      <Section title={content.references.title}>
        <ul className="mt-4 list-disc list-inside text-lg">
          {content.references.list.map((ref, index) => (
            <li key={index}>
              <a
                href={ref.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {ref.text}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default App;
