import CodeBlock from "./CodeBlock";

const InstallationGuide = ({ installation }) => {
  if (!installation) return null;

  return (
    <section>
      <h2 className="text-center mb-4">Installation</h2>
      <div className="card-style">
        {installation.notes?.map((note, i) => (
          <div key={i} className="note mb-3">{note}</div>
        ))}

        <ol>
          {installation.steps.map((step, i) => (
            <li key={i} className="mb-3">
              <strong>{step.title}</strong> – {step.description}
              {step.code && <CodeBlock code={step.code} />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default InstallationGuide;
