import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/freights/swipload-integrations-api",
    },
    {
      type: "category",
      label: "Freight",
      items: [
        {
          type: "doc",
          id: "api/freights/freight-create",
          label: "Create a freight",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/freights/freight-process-shipper-freights-csv",
          label: "Processes a CSV to create or update freight.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/freights/freight-patch-update-status",
          label: "Update freight status using patch",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freights/freight-put-update-status",
          label: "Update freight status using put",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/freights/freight-put-freight-log",
          label: "Update freight log when FTP action succeeds in logic app",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/freights/freight-patch-carriers-reference",
          label: "Update Carriers Reference",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freights/freight-patch-shippers-reference",
          label: "Update Shippers Reference",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freights/freight-update-price",
          label: "Update the price on a Freight. Only works for Freights that are not part of a Shipment.",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
