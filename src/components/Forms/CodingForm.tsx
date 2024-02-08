import { useEffect, useContext } from "react";
import { Context } from "@/context/context";
import { GetSessionParams, getSession } from "next-auth/react";

interface CodingFormProps {
  onPreferencesChange: (preferences: CodingPreferences) => void;
  className?: string;
}

export const CodingForm: React.FC<CodingFormProps> = ({
  onPreferencesChange,
  className,
}) => {
  const [state, setState] = useContext(Context); // Accessing state and setState from context
  const codingPreferences = state.codingPreferences; // Extract codingPreferences from state

  const handleCheckboxChange = (
    category: keyof CodingPreferences,
    value: string
  ) => {
    // Updating codingPreferences in the context's state
    setState((prevState) => ({
      ...prevState,
      codingPreferences: {
        ...prevState.codingPreferences,
        [category]: prevState.codingPreferences[category].includes(value)
          ? prevState.codingPreferences[category].filter(
              (item) => item !== value
            )
          : [...prevState.codingPreferences[category], value],
      },
    }));
  };

  useEffect(() => {
    // Log codingPreferences whenever it changes for debugging purposes
    console.log("State:", state);
    // Call the onPreferencesChange callback to notify parent components of the changes
    onPreferencesChange(codingPreferences);
  }, [codingPreferences, onPreferencesChange]);

  return (
    <div className={className}>
      <div className="flex flex-col justify-start items-start gap-2">
        <p className="text-gray-100 text-sm font-semibold">Data Format:</p>
        <div className="flex gap-2 mb-6">
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="JSON"
              checked={codingPreferences.dataFormat.includes("JSON")}
              onChange={(e) =>
                handleCheckboxChange("dataFormat", e.target.value)
              }
            />
            JSON
          </label>
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="XML"
              checked={codingPreferences.dataFormat.includes("XML")}
              onChange={(e) =>
                handleCheckboxChange("dataFormat", e.target.value)
              }
            />
            XML
          </label>
        </div>

        <p className="text-gray-100 text-sm font-semibold">Error Handling:</p>
        <div className="flex gap-2 mb-6">
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="Try-Catch"
              checked={codingPreferences.errorHandling.includes("Try-Catch")}
              onChange={(e) =>
                handleCheckboxChange("errorHandling", e.target.value)
              }
            />
            Try-Catch
          </label>
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="If-Else"
              checked={codingPreferences.errorHandling.includes("If-Else")}
              onChange={(e) =>
                handleCheckboxChange("errorHandling", e.target.value)
              }
            />
            If-Else
          </label>
        </div>

        <p className="text-gray-100 text-sm font-semibold">Variable Naming:</p>
        <div className="flex gap-2 mb-6">
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="CamelCase"
              checked={codingPreferences.variableNaming.includes("CamelCase")}
              onChange={(e) =>
                handleCheckboxChange("variableNaming", e.target.value)
              }
            />
            Camel Case
          </label>
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="SnakeCase"
              checked={codingPreferences.variableNaming.includes("SnakeCase")}
              onChange={(e) =>
                handleCheckboxChange("variableNaming", e.target.value)
              }
            />
            Snake Case
          </label>
        </div>

        <p className="text-gray-100 text-sm font-semibold">Coding Style:</p>
        <div className="flex gap-2 mb-6">
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="Functional"
              checked={codingPreferences.codingStyle.includes("Functional")}
              onChange={(e) =>
                handleCheckboxChange("codingStyle", e.target.value)
              }
            />
            Functional
          </label>
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="Object-Oriented"
              checked={codingPreferences.codingStyle.includes(
                "Object-Oriented"
              )}
              onChange={(e) =>
                handleCheckboxChange("codingStyle", e.target.value)
              }
            />
            Object-Oriented
          </label>
        </div>

        <p className="text-gray-100 text-sm font-semibold">Language:</p>
        <div className="flex gap-2 mb-6">
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="JavaScript"
              checked={codingPreferences.language.includes("JavaScript")}
              onChange={(e) => handleCheckboxChange("language", e.target.value)}
            />
            JavaScript
          </label>
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="Python"
              checked={codingPreferences.language.includes("Python")}
              onChange={(e) => handleCheckboxChange("language", e.target.value)}
            />
            Python
          </label>
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="TypeScript"
              checked={codingPreferences.language.includes("TypeScript")}
              onChange={(e) => handleCheckboxChange("language", e.target.value)}
            />
            TypeScript
          </label>
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
              value="Java"
              checked={codingPreferences.language.includes("Java")}
              onChange={(e) => handleCheckboxChange("language", e.target.value)}
            />
            Java
          </label>
        </div>

        <p className="text-gray-100 text-sm font-semibold">Add comments:</p>
        <div className="flex gap-2 mb-6">
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="radio"
              name="comments"
              value="Yes"
            />
            Yes
          </label>
          <label>
            <input
              style={{
                boxShadow:
                  "1px 1px 2px #ff178f, -1px -1px 2px #ff178f, inset 1px 1px 2px #ff178f, inset -1px -1px 2px #ff178f",
                marginRight: "8px",
                height: "20px",
                width: "20px",
              }}
              type="radio"
              name="comments"
              value="No"
            />
            No
          </label>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetSessionParams | undefined
) => {
  const session = await getSession(context); // Get session
  const userId = session?.user?.id; // Extract user ID from session

  return {
    props: {
      userId, // Pass userId as prop to the component
    },
  };
};