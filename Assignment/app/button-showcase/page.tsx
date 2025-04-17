import { ButtonShowcase } from "@/components/ui/button-variants"

export default function ButtonShowcasePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">GigFloww Button Component Library</h1>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">Button Variants</h2>
        <ButtonShowcase />

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Primary Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton size="sm">Small</PrimaryButton>
              <PrimaryButton>Default</PrimaryButton>
              <PrimaryButton size="lg">Large</PrimaryButton>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Secondary Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <SecondaryButton size="sm">Small</SecondaryButton>
              <SecondaryButton>Default</SecondaryButton>
              <SecondaryButton size="lg">Large</SecondaryButton>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Outline Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <OutlineButton size="sm">Small</OutlineButton>
              <OutlineButton>Default</OutlineButton>
              <OutlineButton size="lg">Large</OutlineButton>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Disabled Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <DisabledButton size="sm">Small</DisabledButton>
              <DisabledButton>Default</DisabledButton>
              <DisabledButton size="lg">Large</DisabledButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { PrimaryButton, SecondaryButton, OutlineButton, DisabledButton } from "@/components/ui/button-variants"
