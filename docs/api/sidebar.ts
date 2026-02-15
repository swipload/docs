import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/swipload-integrations-api",
    },
    {
      type: "category",
      label: "Freight",
      link: {
        type: "doc",
        id: "api/freight",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/freight-create",
          label: "Create a freight",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/freight-update-freight",
          label: "Update a freight",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freight-patch-update-status",
          label: "Update freight status using patch",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freight-patch-carriers-reference",
          label: "Update Carriers Reference",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freight-patch-shippers-reference",
          label: "Update Shippers Reference",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freight-add-carrier-settlement",
          label: "Create or update carrier freight cost settlement",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/freight-update-freight-by-reference",
          label: "Update freight, settlements and expenses",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freight-upload-freight-attachment",
          label: "Upload freight attachments",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/freight-upload-freight-signature-attachment",
          label: "Upload freight signature",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Shipment",
      link: {
        type: "doc",
        id: "api/shipment",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/shipment-create",
          label: "Create a Shipment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/shipment-add-carrier-settlement",
          label: "Create or update carrier shipment cost settlement",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/shipment-confirm-carrier-settlement",
          label: "Confirm carrier shipment settlement",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/shipment-respond-to-shipment-request",
          label: "Respond to a shipment request (accept or reject)",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Requirement",
      link: {
        type: "doc",
        id: "api/requirement",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/requirement-get-list",
          label: "Get the available freight requirements list",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/schemas/actionresult",
          label: "ActionResult",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/addfreightrequest",
          label: "AddFreightRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/addfreightresponse",
          label: "AddFreightResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/addshipmentrequest",
          label: "AddShipmentRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/addshipmentresponse",
          label: "AddShipmentResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/carrierpricesettlementadditionalexpensedto",
          label: "CarrierPriceSettlementAdditionalExpenseDto",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/carrierpricesettlementdto",
          label: "CarrierPriceSettlementDto",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/documentbase-64-dto",
          label: "DocumentBase64Dto",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/documentbase-64-resultdto",
          label: "DocumentBase64ResultDto",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/externalupdatefreightstatuscode",
          label: "ExternalUpdateFreightStatusCode",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/freightcarriersreferenceupdaterequest",
          label: "FreightCarriersReferenceUpdateRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/freightlinebasedto",
          label: "FreightLineBaseDto",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/freightlocationdto",
          label: "FreightLocationDto",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/freightlocationtimespatchdto",
          label: "FreightLocationTimesPatchDto",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/freightpatchrequest",
          label: "FreightPatchRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/freightpostrequest",
          label: "FreightPostRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/freightpostresponse",
          label: "FreightPostResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/freightshippersreferenceupdaterequest",
          label: "FreightShippersReferenceUpdateRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/freightstatuscode",
          label: "FreightStatusCode",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/freightstatusupdaterequest",
          label: "FreightStatusUpdateRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/freightstatusupdateresponse",
          label: "FreightStatusUpdateResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/freighttype",
          label: "FreightType",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/problemdetails",
          label: "ProblemDetails",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/requirement",
          label: "Requirement",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/shipmentrequestaction",
          label: "ShipmentRequestAction",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/shipmentrequestresponserequest",
          label: "ShipmentRequestResponseRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "api/schemas/unauthorizedresult",
          label: "UnauthorizedResult",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
