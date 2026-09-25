export function OnboardingNote() {
  return (
    <div className="flex flex-col space-y-2 bg-green-700 p-2 rounded text-stone-200 text-sm">
      <span>
        Free self-hosted mode: there is no in-app subscription, premium tier, checkout, or credit system.
        For zero API cost, use an OpenAI-compatible local model endpoint such as Ollama or LM Studio.
      </span>
    </div>
  );
}
