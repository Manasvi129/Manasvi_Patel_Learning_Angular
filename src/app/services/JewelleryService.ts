// services/JewelleryService.ts
import { mockContent, IContent } from '../data/mock-jewellery';

class JewelleryService {
  getAll(): IContent[] {
    return mockContent;
  }

  getById(id: number): IContent | undefined {
    return mockContent.find(content => content.id === id);
  }

  // Additional CRUD methods (create, update, delete) can be added here
  create(newItem: IContent): void {
    mockContent.push(newItem);
  }

  update(id: number, updatedItem: Partial<IContent>): void {
    const index = mockContent.findIndex(content => content.id === id);
    if (index !== -1) {
      mockContent[index] = { ...mockContent[index], ...updatedItem };
    }
  }

  delete(id: number): void {
    const index = mockContent.findIndex(content => content.id === id);
    if (index !== -1) {
      mockContent.splice(index, 1);
    }
  }
}

export default new JewelleryService();
