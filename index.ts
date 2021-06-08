import {
  Diagram,
  NodeModel,
  SymbolPalette,
  ConnectorModel,
  Connector
} from '@syncfusion/ej2-diagrams';

//Initialize the basicshapes for the symbol palette
export function getBasicShapes(): NodeModel[] {
  let basicShapes: NodeModel[] = [
    {
      id: 'Rectangle',
      shape: {
        type: 'Basic',
        shape: 'Rectangle'
      }
    },
    {
      id: 'Ellipse',
      shape: {
        type: 'Basic',
        shape: 'Ellipse'
      }
    },
    {
      id: 'Hexagon',
      shape: {
        type: 'Basic',
        shape: 'Hexagon'
      }
    }
  ];

  return basicShapes;
}
