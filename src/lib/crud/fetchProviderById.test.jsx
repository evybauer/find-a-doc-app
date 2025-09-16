import { server } from '../../test/mocks/server'
import { http } from 'msw'
import { fetchProviderById } from './fetchProviderById'
import { mockProvider } from '../../test/mocks/mockProvider'

const convertValue = (value) => {
    if (value.stringValue !== undefined) {
        return value.stringValue;
    } else if (value.booleanValue !== undefined) {
        return value.booleanValue;
    } else if (value.integerValue !== undefined) {
        return Number(value.integerValue);
    } else if (value.doubleValue !== undefined) {
        return value.doubleValue;
    } else if (value.arrayValue !== undefined) {
        return Array.isArray(value.arrayValue.values) ? value.arrayValue.values.map(convertValue) : [];
    } else if (value.mapValue !== undefined) {
        const result = {};
        for (const key in value.mapValue.fields) {
            result[key] = convertValue(value.mapValue.fields[key]);
        }
        return result;
    } else if (value.arrayValue !== undefined && value.arrayValue.values[0].mapValue !== undefined) {
        return value.arrayValue.values.map(item => {
            const result = {};
            for (const key in item.mapValue.fields) {
                result[key] = convertValue(item.mapValue.fields[key]);
            }
            return result;
        });
    } else {
        return null;
    }
}

const transformData = (data) => {
    return {
        id: convertValue(data.id),
        photo: convertValue(data.photo),
        name: convertValue(data.name),
        specialty: convertValue(data.specialty),
        sponsored: convertValue(data.sponsored),
        rating: convertValue(data.rating),
        reviews: convertValue(data.reviews),
        loyalPatients: convertValue(data.loyalPatients),
        distance: convertValue(data.distance),
        insurance: convertValue(data.insurance),
        address: convertValue(data.address),
        inNetwork: convertValue(data.inNetwork),
        newPatientAppointments: convertValue(data.newPatientAppointments),
        highlyRecommended: convertValue(data.highlyRecommended),
        excellentWaitTime: convertValue(data.excellentWaitTime),
        examsAvailable: convertValue(data.examsAvailable),
        availability: convertValue(data.availability),
        schedulePreference: convertValue(data.schedulePreference),
        gender: convertValue(data.gender),
        visitType: convertValue(data.visitType),
        languageSpoken: convertValue(data.languageSpoken),
    };
};

describe('fetchProviders lib functions', () => {

    const providersURL = `${import.meta.env.VITE_APP_FIRESTORE_KEY}/providers/${3}`

    it('should return the correct data', async () => {
        server.use(
            http.get(providersURL, () => { 
                const validData = firestoreToValidDataById(mockProvider)
                return new HttpResponse(200, validData)
            }),
        )
        const data = await fetchProviderById(3)
        const transformedData = transformData(data)
        expect(transformedData).toEqual(mockProvider)
    })
})